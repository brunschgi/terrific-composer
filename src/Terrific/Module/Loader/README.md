Loader Module
=============
The Loader Module displays a loader that can be used for Ajax-Loading or for more advanced bulk loading pages.

Loading Messages
----------------
Especiallly for bulk loading it can be handy to have a progress indicator.
The different messages can be written as an unordered list:

  <ul class="messages">
    <li>Portfolio Data (1 von 10)</li>
    <li>Portfolio Data (2 von 10)</li>
    ...
  </ul>


To display the next message in a loading process, there is a custom next event bound on the module instance which can be triggered.

    $ctx.trigger('next');

Or called via connectors

    this.fire('next');