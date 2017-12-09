SHELL=/bin/bash -o pipefail

TARGET_DIR = dist
SOURCE_DIR = src
SOURCES = $(shell find $(SOURCE_DIR) -type f -name '*.php')
LIB_SOURCES = $(shell find lib -type f -name '*.php')
TARGETS = $(patsubst $(SOURCE_DIR)/%.php,$(TARGET_DIR)/%.html,$(SOURCES))

SAMPLE_DIR = sample
SAMPLE_SOURCES = $(shell find $(SAMPLE_DIR) -type f -name '*.html' ! -name '*.highlite.html')
SAMPLE_TARGETS =  $(patsubst $(SAMPLE_DIR)/%.html,$(SAMPLE_DIR)/%.highlite.html,$(SAMPLE_SOURCES))

HTML_MINIFIER_OPT += --html5
HTML_MINIFIER_OPT += --collapse-whitespace
HTML_MINIFIER_OPT += --minify-css
HTML_MINIFIER_OPT += --minify-js
HTML_MINIFIER_OPT += --remove-comments
HTML_MINIFIER_OPT += --sort-attributes
HTML_MINIFIER_OPT += --sort-class-name

.DELETE_ON_ERROR:

# Delete the default suffixes for old-fashioned suffix rules
.SUFFIXES:

.PHONY: all clean

all: $(TARGETS) $(SAMPLE_TARGETS)

$(TARGET_DIR)/%.html: $(SOURCE_DIR)/%.php $(LIB_SOURCES) $(SAMPLE_TARGETS)
	-mkdir -p $(dir $@)
	php $< | html-minifier $(HTML_MINIFIER_OPT) > $@

$(SAMPLE_DIR)/%.highlite.html: $(SAMPLE_DIR)/%.html
	pygmentize -f html -P 'cssclass=ouiCodeBlock' $< > $@

clean:
	-rm -rf $(TARGET_DIR)
