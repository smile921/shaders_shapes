
(function () {
    // var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    var camera, scene, renderer, controls;
    var raycaster;
    var cards = [];
    var objectWrapper;
    var mouse;
    var textureAlpha, textureBack, textureBackSpecular;
    var textureFlare0, textureFlare2,textureFlare3;
    var header;

    var cards_scale = 0.2;
    var cards_range = 900;

    var pos = 0.;

    initWebGL();
    animateWebGL();

    // Load Text
    fetch('./README.md')
        .then(function(response) {
            return response.text()
        }).then(function(text) {
            // var about = document.getElementById('about');
            // about.innerHTML = marked(text);
            // about.innerHTML =  '';
            if (window.ShopifyBuy) {
                if (window.ShopifyBuy.UI) {
                    ShopifyBuyInit();
                } else {
                    loadScript();
                }
            } else {
                loadScript();
            }
            if (window.location.hash !== '') {
                onHash();
            }
            var feed = new Instafeed({
                get: 'user',
                userId: '4493247470',
                accessToken: '4493247470.1677ed0.3eba8189d3c241d7ac0080759ffdc114'
            });
            feed.run();
        })

    function addLight( h, s, l, x, y, z ) {
        var light = new THREE.PointLight( 0xffffff, 1.5, 2000 );
        light.color.setHSL( h, s, l );
        light.position.set( x, y, z );
        scene.add( light );
    }

    function addLightFlare( h, s, l, x, y, z ) {
        var light = new THREE.PointLight( 0xffffff, 1.5, 2000 );
        light.color.setHSL( h, s, l );
        light.position.set( x, y, z );
        scene.add( light );

        var flareColor = new THREE.Color( 0xffffff );
        flareColor.setHSL( h, s, l + 0.5 );

        var lensFlare = new THREE.LensFlare( textureFlare0, 700, 0.0, THREE.AdditiveBlending, flareColor );
        lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );
        lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );
        lensFlare.add( textureFlare2, 512, 0.0, THREE.AdditiveBlending );
        lensFlare.add( textureFlare3, 60, 0.6, THREE.AdditiveBlending );
        lensFlare.add( textureFlare3, 70, 0.7, THREE.AdditiveBlending );
        lensFlare.add( textureFlare3, 120, 0.9, THREE.AdditiveBlending );
        lensFlare.add( textureFlare3, 70, 1.0, THREE.AdditiveBlending );
        lensFlare.customUpdateCallback = lensFlareUpdateCallback;
        lensFlare.position.copy( light.position );
        scene.add( lensFlare );
    }

    function randomPos(range) {
        return {x: (Math.random()-.5)*range,
                y: (Math.random()-.5)*range,
                z: (Math.random()-.5)*range}
    }

    function getLength(A,B) {
        return Math.sqrt((A.x - B.x) * (A.x - B.x) +
                         (A.y - B.y) * (A.y - B.y) +
                         (A.z - B.z) * (A.z - B.z));
    }

    function checkPos(pos, width, cards) {
        for (var i in cards) {
            if (getLength(pos, cards[i].parent.position) < width) {
                return false;
            }
        }
        return true;
    }

    function getNonCollidingPos(width, cards) {
        var p = randomPos(cards_range);
        var collide = checkPos(p, width, cards);
        while (!collide) {
            p = randomPos(cards_range);
            collide = checkPos(p, width, cards);
        }
        return p;
    }
    
    function createMesh(front, back, card_data) {
        var front_mat = new THREE.MeshPhongMaterial({
            map: front,
            alphaMap: textureAlpha,
            specularMap: textureFrontSpecular,
            fog: true,
            side: THREE.FrontSide
        });
        var front_mesh = new THREE.Mesh(new THREE.PlaneGeometry(1,1), front_mat);
        front_mesh.scale.x = front.image.width*cards_scale;
        front_mesh.scale.y = front.image.height*cards_scale;
        front_mesh.userData = card_data
        front_mesh.position.set(0.,0.,0.);

        var back_mat = new THREE.MeshPhongMaterial({
            map: back,
            alphaMap: textureAlpha,
            specularMap: textureBackSpecular,
            fog: true,
            side: THREE.FrontSide
        });
        var back_mesh = new THREE.Mesh(new THREE.PlaneGeometry(1,1), back_mat);
        back_mesh.scale.x = front.image.width*cards_scale;
        back_mesh.scale.y = front.image.height*cards_scale;
        back_mesh.userData = card_data
        back_mesh.position.set(0.,0.,-1.);
        back_mesh.rotation.y = Math.PI;

        var card_mesh = new THREE.Object3D();
        card_mesh.add(front_mesh);
        card_mesh.add(back_mesh);

        var xyz = getNonCollidingPos(front.image.width*cards_scale*2., cards);
        var meshParent = new THREE.Object3D();
        meshParent.add(card_mesh);
        meshParent.position.set(xyz.x,xyz.y,xyz.z);
        meshParent.rotation.x = Math.random() * 20;
        meshParent.rotation.y = Math.random() * 20;
        meshParent.rotation.z = Math.random() * 20;

        objectWrapper.add(meshParent);
        card_data.front_mesh = front_mesh;
        card_data.back_mesh = back_mesh;
        card_data.parent = meshParent;

        cards.push(card_data);
    }

    function addCard(card_data){
        var textureLoader = new THREE.TextureLoader();
        textureLoader.load(
            card_data['front'],
            function (front) {
                // createMesh(front, textureBack, card_data);
                var back_loader = textureLoader.load(
                    card_data['back'],
                    function (back) {
                        createMesh(front, back, card_data);
                    }
                );
            }
        );
    }

    function initWebGL() {
        scene = new THREE.Scene();

        header = document.getElementById('header');
        header.style.height = (window.innerHeight*.75) + 'px';

        canvas3D = document.getElementById('canvas3D');
        mouse = new THREE.Vector2();
        // raycaster = new THREE.Raycaster();
        
        camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 750;

        objectWrapper = new THREE.Object3D();
        scene.add(objectWrapper);
        
        scene.fog = new THREE.Fog( 0x000000, 1000, 2000 );
        scene.fog.color.setHSL( 0.51, 0.4, 0.01 );

        var textureLoader = new THREE.TextureLoader();
        textureFlare0 = textureLoader.load( "./imgs/lensflare/lensflare0.png" );
        textureFlare2 = textureLoader.load( "./imgs/lensflare/lensflare2.png" );
        textureFlare3 = textureLoader.load( "./imgs/lensflare/lensflare3.png" );
        // textureBack = textureLoader.load( "./imgs/cards/013-back.png");
        textureAlpha = textureLoader.load( "./imgs/tarot-alpha.png", function(texture) {
            texture.minFilter = THREE.NearestFilter;
            texture.magFilter = THREE.NearestFilter;
        } );

        textureBackSpecular = textureLoader.load( "./imgs/tarot-back-specular.png", function(texture) {
            texture.minFilter = THREE.NearestFilter;
            texture.magFilter = THREE.NearestFilter;
        }  );

        textureFrontSpecular = textureLoader.load( "./imgs/tarot-front-specular.png", function(texture) {
            texture.minFilter = THREE.NearestFilter;
            texture.magFilter = THREE.NearestFilter;
        }  );

        addLightFlare( 0.55, 0.9, 0.5, 500, 300, -1000 );
        addLight( 0.7, 0.8, 0.9, -100, -100, 500 );
        addLight( 1., 1.0, 1.0, 0, 0, 500 );

        // Load cards
        fetch('./index.json')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                // console.log('parsed json', json)
                for (var i = 1; i < json.length; i++) {
                    addCard(json[i]);
                }
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })

        renderer = new THREE.WebGLRenderer( { canvas: canvas3D, antialias: true, alpha: true });
        renderer.setClearColor( scene.fog.color );
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        controls = new THREE.TrackballControls( camera, renderer.domElement );
        controls.rotateSpeed = 0.5;
        controls.minDistance = 0;
        controls.maxDistance = 1000;
        controls.noZoom = true;
        controls.noKeys = true;

        window.addEventListener('resize', onWindowResize, false );
        window.addEventListener('scroll', onScroll, false);
        window.addEventListener('mousemove', onMouseMove, false);
        window.addEventListener('hashchange', onHash);
    }

    function lensFlareUpdateCallback( object ) {
        var f, fl = object.lensFlares.length;
        var flare;
        var vecX = -object.positionScreen.x * 2;
        var vecY = -object.positionScreen.y * 2;
        for( f = 0; f < fl; f++ ) {
            flare = object.lensFlares[ f ];

            flare.x = object.positionScreen.x + vecX * flare.distance;
            flare.y = object.positionScreen.y + vecY * flare.distance;

            flare.rotation = 0;
        }
        object.lensFlares[ 2 ].y += 0.025;
        object.lensFlares[ 3 ].rotation = object.positionScreen.x * 0.5 + THREE.Math.degToRad( 45 );
    }

    function animateWebGL() {
        pos += .1 ;
        var time = Date.now() * 0.00001;

        requestAnimationFrame( animateWebGL );
        objectWrapper.rotation.y += 0.003;
        // camera.position.z = Math.abs(Math.sin(time)) * 1000.; 

        for (var i = 0; i < objectWrapper.children.length; i++) {
            objectWrapper.children[i].children[0].rotation.y += 0.005;
            objectWrapper.children[i].children[0].rotation.x += 0.002;
        }
            
        controls.update();
        renderer.autoClear = false;
        renderer.render( scene, camera );
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
        header.style.height = (window.innerHeight*.75) + 'px';
    }

    function onScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var totalHeight = document.documentElement.clientHeight;
        camera.position.z = (1.-scrollTop/totalHeight) * 750.; 
        // camera.position.y = ((scrollTop/totalHeight)*-100);
    }

    function onMouseMove(e) {
        var totalWidth = document.documentElement.clientWidth;
        var totalHeight = document.documentElement.clientHeight;
        controls.target.x = ((e.clientX/totalWidth)*100)-50;
        camera.position.y = -((e.clientY/totalHeight)*100);
    }

    function onHash() {
        var hashes = location.hash.split('&');
        for (var i in hashes) {
            var ext = hashes[i].substr(hashes[i].lastIndexOf('.') + 1);
            var hash = hashes[i];

            // Extract hash if is present
            if (hash.search('#') === 0) {
                hash = hash.substr(1);
            }
            goTo(hash);
        }
    }

    function goTo(string) {
        console.log(string)
        var elements = document.querySelectorAll('[id^="'+string+'"]');
        if (elements && elements.length) {
            elements[0].scrollIntoView(true);
            var viewportH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            window.scrollBy(0, (elements[0].getBoundingClientRect().height-viewportH)/2);
        }
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        // script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;

        // document.querySelector("flip-container").classList.toggle("flip")
    }

    function ShopifyBuyInit() {
    
    }
})();