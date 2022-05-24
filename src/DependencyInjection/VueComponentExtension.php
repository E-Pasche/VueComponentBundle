<?php

namespace Epasche\VueComponentBundle\DependencyInjection;

use ReflectionExtension;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;

class VueComponentExtension extends ReflectionExtension
{
     /**
     * @return string
     */
    public function getAlias() : string
    {
        return 'vue_component';
    }
}