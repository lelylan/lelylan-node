MOCHA_OPTS=
REPORTER = dot

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		$(MOCHA_OPTS)

test-growl:
	@NODE_ENV=test ./node_modules/.bin/mocha \
    --reporter $(REPORTER) \
    --growl \
    --watch

.PHONY: test test-growl
