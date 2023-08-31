import { CanActivateFn } from '@angular/router';

const authGuard: CanActivateFn = (route, state) => {
  console.log(route, state);
  return true;
};

export default authGuard;
