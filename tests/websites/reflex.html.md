*   * Docs
* Showcase
* Blog
* Resources
* Components
* Hosting
*   * 18.4K
*   *   *
* ### Learn
* ### Components
* ### Recipes
* ### API Reference
* ##### Onboarding
Getting Started
* Introduction
* Installation
* Project Structure
* Configuration
* How Reflex Works
Tutorial
* Intro
* Setup
* Frontend
* Adding State
* Final App
* ##### User Interface
Components
* Props
* Style Props
* Conditional Props
* Conditional Rendering
* Rendering Iterables
* Html To Reflex
* Library
Pages
* Routes
* Dynamic Routing
* Metadata
Styling
* Overview
* Theming
* Responsive
* Custom Stylesheets
* Layout
* Common Props
Assets
* Referencing Assets
* Upload And Download Files
Wrapping React
* Overview
* Guide
* Example
Custom Components
* Overview
* Prerequisites For Publishing
* Command Reference
* ##### State
Vars
* Base Vars
* Computed Vars
* Var Operations
* Custom Vars
Events
* Events Overview
* Event Arguments
* Setters
* Yield Events
* Chaining Events
* Special Events
* Page Load Events
* Background Events
* Event Actions
Substates
* Overview
* Component State
API Routes
* Overview
Client Storage
* Overview
Database
* Overview
* Tables
* Queries
* Relationships
Authentication
* Authentication Overview
Utility Methods
* Router Attributes
* Lifespan Tasks
* Other Methods
* ##### Hosting
Reflex Deploy
* Deploy Quick Start
* Hosting CLI Commands
Self Hosting
* Self Hosting
Utility-methods
/
Exception-handlers
# Exception handlers
_Added in v0.5.7_
Exceptions handlers are functions that can be assigned to your app to handle
exceptions that occur during the application runtime. They are useful for
customizing the response when an error occurs, logging errors, and performing
cleanup tasks.
## Types
Reflex support two type of exception handlers `frontend_exception_handler` and
`backend_exception_handler`.
They are used to handle exceptions that occur in the `frontend` and `backend`
respectively.
The `frontend` errors are coming from the JavaScript side of the application,
while `backend` errors are coming from the the event handlers on the Python
side.
## Register an Exception Handler
To register an exception handler, assign it to
`app.frontend_exception_handler` or `app.backend_exception_handler` to assign
a function that will handle the exception.
The expected signature for an error handler is `def handler(exception:
Exception)`.
Only named functions are supported as exception handler.
## Examples
import reflex as rx
def custom_frontend_handler(exception: Exception) -> None:
# My custom logic for frontend errors
print("Frontend Error: " + str(exception))
def custom_backend_handler(
exception: Exception,
) -> Optional[rx.event.EventSpec]:
# My custom logic for backend errors
print("Backend Error: " + str(exception))
app = rx.App(
frontend_exception_handler=custom_frontend_handler,
backend_exception_handler=custom_backend_handler,
)
Did you find this useful?
Yes
No
Raise an issue
Edit this page
#### Links
HomeShowcaseBlogChangelog
#### Documentation
IntroductionInstallationComponentsHosting
#### Resources
FAQCommon ErrorsRoadmapForum
#### Join Newsletter
Get the latest updates and news about Reflex.
Subscribe
Copyright © 2024 Pynecone, Inc.
##### On this page
* Exception handlers
* Types
* Register an Exception Handler
* Examples
