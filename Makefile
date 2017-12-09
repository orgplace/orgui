SHELL=/bin/bash -o pipefail

TARGET_DIR = dist

HTML_MODULES = php
CSS_MODULES = less
MODULES = $(HTML_MODULES) $(CSS_MODULES)

.DELETE_ON_ERROR:

# Delete the default suffixes for old-fashioned suffix rules
.SUFFIXES:

.PHONY: all clean watch src $(MODULES)

all: src $(MODULES)

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

$(HTML_MODULES):
	+$(MAKE) -C "$@" -e "TARGET_DIR=../$(TARGET_DIR)"

$(CSS_MODULES):
	+$(MAKE) -C "$@" -e "TARGET_DIR=../$(TARGET_DIR)/css"
