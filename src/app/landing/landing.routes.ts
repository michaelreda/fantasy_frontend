import { LandingComponent } from './landing.component';
import { RegisterFanIDComponent } from './register-fan-id/register-fan-id.component';


export const LandingRoutes = [
         {
           path: "",
           component: LandingComponent
         },
         {
           path: "registerFanId",
           component: RegisterFanIDComponent
         }
         // {

         //   path: "",
         //   children: [
         //         {
         //           path: "",
         //           component: LandingComponent
         //         },
         //         {
         //             path: "registerFanId",
         //             component: RegisterFanIDComponent
         //         }
         //   ]
         // }
       ];