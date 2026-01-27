import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'es'];

// Usamos default export para que Next.js lo reconozca sin importar el nombre
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Filtro de archivos estáticos y Next.js internals
  if (
    pathname.includes('.') || 
    pathname.startsWith('/_next') || 
    pathname.startsWith('/images') || 
    pathname.startsWith('/font') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirección al idioma por defecto
  const url = request.nextUrl.clone();
  url.pathname = `/es${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Matcher optimizado para excluir todo lo que no sean rutas de página
    '/((?!api|_next/static|_next/image|images|font|favicon.ico|sw.js).*)',
  ],
};