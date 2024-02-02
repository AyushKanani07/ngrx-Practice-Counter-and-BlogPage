import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from '../shared/master.service';

export const authGuard: CanActivateFn = (route, state) => {

  const currentmenu = route.url[0].path;

  const router = inject(Router);
  const service = inject(MasterService);

  if(service.haveaccess()){
    return true;
    // if(currentmenu == 'blog'){
    //   return true;
    // }else{
    //   alert('access Denied')
    //   router.navigate(['']);
    //   return false;
    // }
  }else{
    alert('access Denied')
      router.navigate(['']);
      return false;
  }
  
  
};
