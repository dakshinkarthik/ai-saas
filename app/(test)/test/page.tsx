import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs';

const TestPage = () => {
  return (
    <div>
      <p>Test dashboard page (Protected)</p>
      <UserButton afterSignOutUrl='/'/>
    </div>
    );
}

export default TestPage;