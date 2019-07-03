import { UsersTableComponent } from "./users-table/users-table.component";

export const AdminRoutes = [
  {
    path: "",
    children: [
          {
            path: "users",
            component: UsersTableComponent
          }
    ]
  }
];
