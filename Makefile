TARGET_DIR = dist

LANGUAGE_CODE = en

HTML_MODULES = php
CSS_MODULES = less
JS_MODULES =
MODULES = $(HTML_MODULES) $(CSS_MODULES) $(JS_MODULES)

.DELETE_ON_ERROR:

# Delete the default suffixes for old-fashioned suffix rules
.SUFFIXES:

.PHONY: all clean $(MODULES)

all: $(MODULES)

clean:
	-rm -rf $(TARGET_DIR) php/locale/*/C/LC_MESSAGES/messages.mo

$(HTML_MODULES):
	+$(MAKE) -C "$@" -e "TARGET_DIR=../$(TARGET_DIR)"

$(CSS_MODULES):
	+$(MAKE) -C "$@" -e "TARGET_DIR=../$(TARGET_DIR)/css"

$(JS_MODULES):
	+$(MAKE) -C "$@" -e "TARGET_DIR=../$(TARGET_DIR)/js"

