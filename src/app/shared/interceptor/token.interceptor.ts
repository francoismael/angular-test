import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  if(token) {
    const cloneRequest = req.clone({
      setHeaders: {
        'x-access-token': token
      }
    });
    return next(cloneRequest);
  }
  return next(req);
};
