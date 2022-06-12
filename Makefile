.DEFAULT_GOAL := all

all: install lint

install:
	@pnpm install

lint:
	@pnpm run lint && ./gradlew ktlintCheck

format:
	@pnpm run format && ./gradlew ktlintFormat

compile:
	@./gradlew build

test:
	@./gradlew test
