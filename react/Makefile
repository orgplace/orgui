SHELL=/bin/bash -o pipefail

TARGET_DIR = build
REACT_OUT=build
SOURCES = $(shell find . \( -name build -o -name node_modules \) -prune -o -type f -print)

.DELETE_ON_ERROR:

# Delete the default suffixes for old-fashioned suffix rules
.SUFFIXES:

.PHONY: all clean

all: $(TARGET_DIR)

$(TARGET_DIR): node_modules $(SOURCES)
	npm run build
	[ "$(TARGET_DIR)" = "$(REACT_OUT)" ] || mv "$(REACT_OUT)" "$(TARGET_DIR)"

node_modules: package.json
	npm i

clean:
	-rm -rf $(TARGET_DIR)
