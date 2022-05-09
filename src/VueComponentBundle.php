<?php

namespace Test\VueComponentBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class VueComponentBundle extends Bundle
{
    public function getPath(): string
    {
        return \dirname(__DIR__);
    }
}