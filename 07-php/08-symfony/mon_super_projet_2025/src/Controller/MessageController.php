<?php

namespace App\Controller;

use App\Entity\Message;
use App\Repository\MessageRepository;
use App\Form\MessageForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route("/message")]
final class MessageController extends AbstractController
{
    #[Route('/add', name: 'app_message_create')]
    public function createMessage(EntityManagerInterface $em, Request $request): Response
    {
        $message = new Message();
        $form = $this->createForm(MessageForm::class, $message);  

        $form->handleRequest($request);
        // le formulaire récupère toute les données envoyées 
        if($form->isSubmitted() && $form->isValid())
        {
            // dd($message);
            $em->persist($message);
            $em->flush();

            $this->addFlash("success", "Un nouveau message a été ajouté");
            return $this->redirectToRoute("app_message_read");
           
        }
        // $message->setContent("Ceci est un message de test")
        //         ->setCreatedAt(new \DateTimeImmutable());
        // $em->persist($message);
        // $em->flush();
        return $this->render('message/create.html.twig', [
            'messageForm' => $form,
        ]);
    }
    #[Route("/{page<^\d+$>?1}/{nb<^\d+$>?5}", name: "app_message_read")]
    public function readMessage(MessageRepository $repo, $page, $nb): Response
    {
        // $message = $repo->findAll();
        // Paramètre 1: WHERE, Paramètre 2: ORDER BY
        // $message = $repo->findBy([], ["createdAt"=>"DESC"]);
        // paramètre 3 : LIMIT, Paramètre 4: OFFSET
        $message = $repo->findBy([], ["createdAt"=>"DESC"], $nb, ($page-1)*$nb);
        
        // nombre total de message
        $total = $repo->count();

        // nombre de page :
        $nbPage = ceil($total / $nb);
        
        return $this->render('message/index.html.twig', [
            'listMessage' => $message,
            "nbPage"=>$nbPage,
            "nombre"=>$nb,
            "currentPage"=>$page
        ]);
    }

    #[Route("/delete/{id<^\d+$>}", name: "app_message_delete")]
    public function deleteMessage(MessageRepository $repo, $id, EntityManagerInterface $em):
    Response
    {
        $message = $repo->find($id);
        if(!$message)
        {
            $this->addFlash("error", "Aucun Message Correspondant");
        }
        else
        {
            $em->remove($message);
            $em->flush();
            $this->addFlash("Success", "Votre message a été supprimé");
        }
        return $this->redirectToRoute("app_message_read");

    }

    #[Route("/update/{id<^\d+$>}", name:"app_message_update")]
    public function updateMessage(?Message $message, EntityManagerInterface $em, Request $request):Response
    {
        if($message)
        {
            $form = $this->createForm(MessageForm::class, $message);  

            $form->handleRequest($request);
            // le formulaire récupère toute les données envoyées 
            if($form->isSubmitted() && $form->isValid())
            {
                // dd($message);
                $em->persist($message);
                $em->flush();

                $this->addFlash("success", "Un nouveau message a été ajouté");
                return $this->redirectToRoute("app_message_read");
            
            }
            // $message->setContent("Message Modifié")
            //         ->setEditedAt(new \DateTime());
            // $em->flush();
            // $this->addFlash("success", "Message Mis à Jour");

        }
        else
        {
            $this->addFlash("danger", "Aucun message correspondant");
            return $this->redirectToRoute("app_message_read");
        }
         return $this->render('message/create.html.twig', [
            'messageForm' => $form,
        ]);
    }
}
