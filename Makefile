.DEFAULT_GOAL := all

all: install lint test compile

install:
	@pnpm install

lint:
	@pnpm run lint && ./gradlew ktlintCheck

format:
	@pnpm run format && ./gradlew ktlintFormat

compile:
	@pnpm run build && ./gradlew build

dev:
	@pnpm run dev

test:
	@pnpm run test && ./gradlew test
