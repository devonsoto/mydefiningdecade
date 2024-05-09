import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Welcome = () => {
  return (
    <div className='flex flex-col text-center space-y-5 leading-loose items-center'>
      <p className=' text-3xl'>My Defining Decade </p>
      <p>
        &quot;The Defining Decade: Why Your Twenties Matter—And How to Make the
        Most of Them Now&quot; is a book by Dr. Meg Jay. It emphasizes the
        importance of one&apos;s twenties, a crucial period in a person&apos;s
        life according to the author. Dr. Jay uses real stories from her
        experience as a clinical psychologist to illustrate how the decisions
        made in this decade impact the rest of one&apos;s life. She offers
        advice on work, relationships, personality, social networks, and
        identity, advocating for a proactive approach to this formative decade.
      </p>
      <p>
        After reading Dr. Meg Jay&apos;s &apos;The Defining Decade,&apos; we
        were inspired to create a platform that empowers users to share and
        discover the life goals and changes others aspire to make during this
        pivotal decade. This space is dedicated to providing a supportive
        environment where you can express and reflect upon your personal
        thoughts and plans, helping to foster a community of mutual inspiration
        and growth.
      </p>
      <Button asChild>
        <Link href='/questionnaire'>Get Started</Link>
      </Button>
    </div>
  );
};
