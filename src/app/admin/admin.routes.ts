import { AdminComponent } from './admin.component';
import { UsersTableComponent } from "./users-table/users-table.component";

export const AdminRoutes = [
  {
    path: "",
    component: AdminComponent,
    children: [
          {
            path: "users",
            component: UsersTableComponent
          }
    ]
  }
];
