var keyboardArray = {
	"keyB5": "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"
}