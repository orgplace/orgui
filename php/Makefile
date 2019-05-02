SHELL=/bin/bash -o pipefail

TARGET_DIR = dist
SOURCE_DIR = src
SOURCES = $(shell find $(SOURCE_DIR) -type f -name '*.php')
LIB_SOURCES = $(shell find lib -type f -name '*.php')
TARGETS = $(patsubst $(SOURCE_DIR)/%.php,$(TARGET_DIR)/%.html,$(SOURCES))

SAMPLE_HTML_DIR = sample-html
SAMPLE_HTML_SOURCES = $(shell find $(SAMPLE_HTML_DIR) -type f -name '*.html' ! -name '*.highlite.html')
SAMPLE_HTML_TARGETS =  $(patsubst $(SAMPLE_HTML_DIR)/%.html,$(SAMPLE_HTML_DIR)/%.highlite.html,$(SAMPLE_HTML_SOURCES))

SAMPLE_JS_DIR = sample-js
SAMPLE_JS_SOURCES = $(shell find $(SAMPLE_JS_DIR) -type f -name '*.js' ! -name '*.highlite.html')
SAMPLE_JS_TARGETS = $(patsubst $(SAMPLE_JS_DIR)/%.js,$(SAMPLE_JS_DIR)/%.highlite.html,$(SAMPLE_JS_SOURCES))

SAMPLE_TARGETS = $(SAMPLE_HTML_TARGETS) $(SAMPLE_JS_TARGETS)

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

all: $(TARGETS)

$(TARGET_DIR)/%.html: $(SOURCE_DIR)/%.php $(LIB_SOURCES) $(SAMPLE_TARGETS)
	-mkdir -p $(dir $@)
	php $< | html-minifier $(HTML_MINIFIER_OPT) > $@

$(SAMPLE_HTML_DIR)/%.highlite.html: $(SAMPLE_HTML_DIR)/%.html
	pygmentize -l html -f html -P 'cssclass=ouiCodeBlock' $< > $@

$(SAMPLE_JS_DIR)/%.highlite.html: $(SAMPLE_JS_DIR)/%.js
	pygmentize -l js -f html -P 'cssclass=ouiCodeBlock' $< > $@

clean:
	-rm -rf $(TARGET_DIR)
