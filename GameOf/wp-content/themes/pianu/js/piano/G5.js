var keyboardArray = {
	"keyG5": "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"
}