import Link from 'next/link'
import Button from '@/components/common/Button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-6xl font-bold text-primary mb-4">404</h2>
      <h3 className="text-2xl font-bold text-dark mb-4">Page Not Found</h3>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </div>
  )
}
