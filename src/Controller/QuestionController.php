<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class QuestionController
{
    #[Route('/', name: 'app_homepage')]
    public function homepage(): Response
    {
        return new Response('OMG! My first page already! Wooo!');
    }

    #[Route('/questions/{slug}', name: 'app_question_show')]
    public function show(string $slug): Response
    {
        return new Response(sprintf(
            'Future page to show the question: "%s"',
            ucwords(str_replace('-', ' ', $slug))
        ));
    }
}