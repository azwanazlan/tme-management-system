import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Your secret key for JWT verification
const SECRET_KEY = 'your_secret_key' as string;
const encoder = new TextEncoder();
const secretKeyBytes = encoder.encode(SECRET_KEY);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log('Middleware: kicks in', pathname);
  if (pathname === '/api/auth/login' || pathname === '/login') {
    return NextResponse.next();
  }

  // Validate cookies (JWT)
  let token = req.cookies.get('token')?.value;

  // If no cookie token exists, check the Authorization header for Bearer token
  if (!token) {
    const authHeader = req.headers.get('authorization');
    if (authHeader) {
      const [scheme, bearerToken] = authHeader.split(' ');
      if (scheme === 'Bearer' && bearerToken) {
        token = bearerToken;
      }
    }
  }

  if (!token) {
    // If no token is found, respond with 401 Unauthorized
    return new NextResponse('Authorization required', { status: 401 });
  }

  try {
    // Verify the JWT token
    const isVerified = await jwtVerify(token, secretKeyBytes);

    if (isVerified) {
      return NextResponse.next();
    }
  } catch (error) {
    console.debug('JWT Error:', error);
    // If token is invalid, respond with 401 Unauthorized
    return new NextResponse('Invalid or expired token', { status: 401 });
  }
}

export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*'],
};