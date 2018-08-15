<?php

function strict_error_handler($errno, $errstr, $errfile, $errline)
{
    fwrite(STDERR, "\033[1m{$errfile}:{$errline}: \033[1;31merror: {$errstr} ({$errno})\033[0m" . PHP_EOL);
    exit(1);
}
set_error_handler("strict_error_handler");
