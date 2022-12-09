import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ViewsComponent } from './views/views.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DirectivesComponent } from './directives/directives.component';
import { BorderDirective } from './border.directive';
import { ChildComponent } from './two-way-binding/child/child.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { EventChildComponent } from './custom-events/event-child/event-child.component';

@NgModule({
  // Defines which modules/libraries are available in this ngModule
  imports: [BrowserModule, FormsModule],

  // Defines which Components, Pipes, Directives are available in this ngModule
  declarations: [
    AppComponent,
    HelloComponent,
    ViewsComponent,
    LifecycleComponent,
    ChangeDetectionComponent,
    DirectivesComponent,
    BorderDirective,
    ChildComponent,
    TwoWayBindingComponent,
    CustomEventsComponent,
    EventChildComponent
  ],

  // Defines the bootstrap or entry component of this ngModule
  bootstrap: [AppComponent],

  // Defines and configures Services available in this ngModule
  providers: [],
})
export class AppModule {}
