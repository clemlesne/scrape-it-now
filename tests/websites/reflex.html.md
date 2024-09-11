-   [![Reflex Logo]()](/)

-   [Docs](/docs/getting-started/introduction/)

-   [Showcase](/docs/gallery/)

-   [Blog](/blog/)

-   Resources

-   [Components](/docs/library/)

-   [Hosting](/docs/hosting/deploy-quick-start/)

-   [](https://github.com/reflex-dev/reflex)

    18.4K

-   [](https://discord.gg/T5WSbC2YtQ)

-   [](/docs/getting-started/introduction/)

    ### Learn
-   [](/docs/library/)

    ### Components
-   [](/docs/recipes-overview/)

    ### Recipes
-   [](/docs/api-reference/app/)

    ### API Reference

&nbsp;

-   [](/docs/getting-started/introduction/)

    ##### Onboarding

    Getting Started

    -   [](/docs/getting-started/introduction/)
        Introduction

    -   [](/docs/getting-started/installation/)
        Installation

    -   [](/docs/getting-started/project-structure/)
        Project Structure

    -   [](/docs/getting-started/configuration/)
        Configuration

    -   [](/docs/getting-started/how-reflex-works/)
        How Reflex Works

    Tutorial

    -   [](/docs/tutorial/intro/)
        Intro

    -   [](/docs/tutorial/setup/)
        Setup

    -   [](/docs/tutorial/frontend/)
        Frontend

    -   [](/docs/tutorial/adding-state/)
        Adding State

    -   [](/docs/tutorial/final-app/)
        Final App

-   [](/docs/ui/overview/)

    ##### User Interface

    Components

    -   [](/docs/components/props/)
        Props

    -   [](/docs/components/style-props/)
        Style Props

    -   [](/docs/components/conditional-props/)
        Conditional Props

    -   [](/docs/components/conditional-rendering/)
        Conditional Rendering

    -   [](/docs/components/rendering-iterables/)
        Rendering Iterables

    -   [](/docs/components/html-to-reflex/)
        Html To Reflex

    -   [](/docs/library/)
        Library

    Pages

    -   [](/docs/pages/routes/)
        Routes

    -   [](/docs/pages/dynamic-routing/)
        Dynamic Routing

    -   [](/docs/pages/metadata/)
        Metadata

    Styling

    -   [](/docs/styling/overview/)
        Overview

    -   [](/docs/styling/theming/)
        Theming

    -   [](/docs/styling/responsive/)
        Responsive

    -   [](/docs/styling/custom-stylesheets/)
        Custom Stylesheets

    -   [](/docs/styling/layout/)
        Layout

    -   [](/docs/styling/common-props/)
        Common Props

    Assets

    -   [](/docs/assets/referencing-assets/)
        Referencing Assets

    -   [](/docs/assets/upload-and-download-files/)
        Upload And Download Files

    Wrapping React

    -   [](/docs/wrapping-react/overview/)
        Overview

    -   [](/docs/wrapping-react/guide/)
        Guide

    -   [](/docs/wrapping-react/example/)
        Example

    Custom Components

    -   [](/docs/custom-components/overview/)
        Overview

    -   [](/docs/custom-components/prerequisites-for-publishing/)
        Prerequisites For Publishing

    -   [](/docs/custom-components/command-reference/)
        Command Reference

-   [](/docs/state/overview/)

    ##### State

    Vars

    -   [](/docs/vars/base-vars/)
        Base Vars

    -   [](/docs/vars/computed-vars/)
        Computed Vars

    -   [](/docs/vars/var-operations/)
        Var Operations

    -   [](/docs/vars/custom-vars/)
        Custom Vars

    Events

    -   [](/docs/events/events-overview/)
        Events Overview

    -   [](/docs/events/event-arguments/)
        Event Arguments

    -   [](/docs/events/setters/)
        Setters

    -   [](/docs/events/yield-events/)
        Yield Events

    -   [](/docs/events/chaining-events/)
        Chaining Events

    -   [](/docs/events/special-events/)
        Special Events

    -   [](/docs/events/page-load-events/)
        Page Load Events

    -   [](/docs/events/background-events/)
        Background Events

    -   [](/docs/events/event-actions/)
        Event Actions

    Substates

    -   [](/docs/substates/overview/)
        Overview

    -   [](/docs/substates/component-state/)
        Component State

    API Routes

    -   [](/docs/api-routes/overview/)
        Overview

    Client Storage

    -   [](/docs/client-storage/overview/)
        Overview

    Database

    -   [](/docs/database/overview/)
        Overview

    -   [](/docs/database/tables/)
        Tables

    -   [](/docs/database/queries/)
        Queries

    -   [](/docs/database/relationships/)
        Relationships

    Authentication

    -   [](/docs/authentication/authentication-overview/)
        Authentication Overview

    Utility Methods

    -   [](/docs/utility-methods/router-attributes/)
        Router Attributes

    -   [](/docs/utility-methods/lifespan-tasks/)
        Lifespan Tasks

    -   [](/docs/utility-methods/other-methods/)
        Other Methods

-   [](/docs/hosting/deploy-quick-start/)

    ##### Hosting

    Reflex Deploy

    -   [](/docs/hosting/deploy-quick-start/)
        Deploy Quick Start

    -   [](/docs/hosting/hosting-cli-commands/)
        Hosting CLI Commands

    Self Hosting

    -   [](/docs/hosting/self-hosting/)
        Self Hosting

Utility-methods

/

Exception-handlers

[](/reflex.html#exception-handlers)

# Exception handlers

*Added in v0.5.7*

Exceptions handlers are functions that can be assigned to your app to handle exceptions that occur during the application runtime. They are useful for customizing the response when an error occurs, logging errors, and performing cleanup tasks.

[](/reflex.html#types)

## Types

Reflex support two type of exception handlers `frontend_exception_handler` and `backend_exception_handler`.

They are used to handle exceptions that occur in the `frontend` and `backend` respectively.

The `frontend` errors are coming from the JavaScript side of the application, while `backend` errors are coming from the the event handlers on the Python side.

[](/reflex.html#register-an-exception-handler)

## Register an Exception Handler

To register an exception handler, assign it to `app.frontend_exception_handler` or `app.backend_exception_handler` to assign a function that will handle the exception.

The expected signature for an error handler is `def handler(exception: Exception)`.

Only named functions are supported as exception handler.

[](/reflex.html#examples)

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

[Raise an issue](https://github.com/reflex-dev/reflex-web/issues/new?title=Issue%20with%20reflex.dev%20documentation&amp;body=Path:%20/docs/utility-methods/exception-handlers/)

[Edit this page](https://github.com/reflex-dev/reflex-web/tree/main/docs/utility-methods/exception-handlers/.md)

[](https://github.com/reflex-dev/reflex)

[](https://twitter.com/getreflex)

[](https://discord.gg/T5WSbC2YtQ)

#### Links

[Home](/)[Showcase](/docs/gallery/)[Blog](/blog/)[Changelog](/changelog/)

#### Documentation

[Introduction](/docs/getting-started/introduction/)[Installation](/docs/getting-started/installation/)[Components](/docs/library/)[Hosting](/docs/hosting/deploy-quick-start/)

#### Resources

[FAQ](/faq/)[Common Errors](/errors/)[Roadmap](https://github.com/reflex-dev/reflex/issues/2727)[Forum](https://github.com/orgs/reflex-dev/discussions)

#### Join Newsletter

Get the latest updates and news about Reflex.

Subscribe

Copyright © 2024 Pynecone, Inc.

[](https://github.com/reflex-dev/reflex)

[](https://twitter.com/getreflex)

[](https://discord.gg/T5WSbC2YtQ)

##### On this page

-   [Exception handlers](/docs/utility-methods/exception-handlers/#exception-handlers)
-   [Types](/docs/utility-methods/exception-handlers/#types)
-   [Register an Exception Handler](/docs/utility-methods/exception-handlers/#register-an-exception-handler)
-   [Examples](/docs/utility-methods/exception-handlers/#examples)
