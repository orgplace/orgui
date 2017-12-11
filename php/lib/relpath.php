<?php
function relpath(string $path_from_top, int $self_depth) {
    if ($self_depth == 0) {
        return $path_from_top;
    }

    $upward = str_repeat('../', $self_depth);
    if ($path_from_top === '.') {
        return rtrim($upward, '/');
    }

    return $upward . $path_from_top;
}
