SHELL=/bin/bash -o pipefail

TARGET_DIR = dist

HTML_MODULES = php
CSS_MODULES = less
JS_MODULES = js-gcl
MODULES = src react $(HTML_MODULES) $(CSS_MODULES) $(JS_MODULES)

.DELETE_ON_ERROR:

# Delete the default suffixes for old-fashioned suffix rules
.SUFFIXES:

.PHONY: all clean watch $(MODULES)

all: $(MODULES)

clean:
	-rm -rf $(TARGET_DIR)

watch:
	inotifywait -m -r \
		-e create,delete,modify,move \
		--exclude '(\./$(TARGET_DIR)/.*|.*\.git/.*)' \
		--format "%w%f" . | \
		xargs -I{} -n1 sh -c "echo {} && $(MAKE) -j4"

src:
	rsync -au --exclude ".gitkeep" "src/" "$(TARGET_DIR)/"

react:
	+$(MAKE) -C "$@" -e "TARGET_DIR=$(abspath $(TARGET_DIR)/react)"

$(HTML_MODULES):
	+$(MAKE) -C "$@" -e "TARGET_DIR=$(abspath $(TARGET_DIR))"

$(CSS_MODULES):
	+$(MAKE) -C "$@" -e "TARGET_DIR=$(abspath $(TARGET_DIR)/css)"

$(JS_MODULES):
	+$(MAKE) -C "$@" -e "TARGET_DIR=$(abspath $(TARGET_DIR)/js)"
