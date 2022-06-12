package com.danieltedman.katacampus

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class KataCampusApplication

fun main(args: Array<String>) {
    runApplication<KataCampusApplication>(*args)
}
