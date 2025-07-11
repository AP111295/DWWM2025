<?php

namespace App\Controller; // This namespace indicates that this controller is part of the App\Controller namespace in Symfony framework 

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController; // AbstractController is a base controller class provided by Symfony that includes useful methods for rendering templates and handling requests.
use Symfony\Component\HttpFoundation\Response;// Response is a class that represents an HTTP response in Symfony.
use Symfony\Component\Routing\Attribute\Route;// Route is an attribute that allows you to define a route for a controller method in Symfony, making it accessible via a specific URL.


// Final: for Security which Prevents others from modifying your controller's behavior 
// extends: This means 'TodoListController' class will inherit features from another class 'AbstractController'.
// AbstractController: This is a Parent class provided by Symfony that includes useful methods for rendering templates and handling requests.
/*
   What it provides (key features/tools we inherit from AbstractController through extends):
   $this->render() - For displaying templates
   $this->addFlash() - For showing messages
   $this->redirectToRoute() - For page redirects

   Many other helper methods

   Why not use basic Controller?:

   AbstractController is lighter weight

   Only gives you what you need 
*/
final class TodoListController extends AbstractController // Create a locked-down controller called TodoListController that gets free tools from Symfony's AbstractController
{
    #[Route('/todo/list', name: 'app_todo_list')] // Route for the todo list is specified here which is http://127.0.0.1:8000/todo/list
    // Public: Symfony routing can only call public methods
    /* index(): Convention for "default view" of a resource
                Equivalent to REST's "list all" operation
                Common Symfony naming pattern:
                index() - List view ( the todolist is a list so to display in list format)
                show() - Single item view
                new()/edit() - Forms
                */
    //Response: Return Type Declaration: Specifies the method must return a Response object.
    public function index(): Response
    {
        // Render or provide template with data. Refer to 'template/todo_list/index.html.twig'
        return $this->render('todo_list/index.html.twig', [
            'controller_name' => 'TodoListController',
        ]);
      
    }
    #[Route('/todo/add/{label}/{tache}', name: 'app_todo_add')] // 'app_todo_add-The Route Name- This is like giving your route a nickname so that its easier to use the name in the code instead of writing the whole path
       /* '/todo/add/{label}/{tache}' - The URL Pattern
            This is like the address format for your page. Let's understand each part:
        _____________________________________________________________________________________
            |Part	    |   What It Means	          |             Example                 |
            /todo/add:	|  The main address	          |     Like "www.yoursite.com/todo/add"|
            /{label}:	|  A placeholder for category |	  "work", "shopping", "personal"    |
            /{tache}:	|  A placeholder for task	  |    "buy milk", "finish report"      | */ 

    public function create($label, $tache, $request): Response // creating $lable and $tache variable to store the values 
    {
        $sess = $request->getSession();
        $todo = $sess->get("todoList",[]);
        if(isset($todo[$label]))
        {
            $this->addFlash("success", "La tache $label existe déjà");
        }
        else
        {
            $todo[$label] = ["tache"=>$tache, "done"=>false];
            $sess->set("todoList", $todo);
    
            $this->addFlash("success", "$label ajouté à la liste");
        }
        return $this->redirectToRoute("app_todo_list");
    }
}
