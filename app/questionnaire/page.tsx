'use client';

import { useEffect, useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Questions } from '../models/questions';

const formSchema = z.object({
  questions1: z
    .string()
    .min(2, { message: 'Response must be at least 2 characters long.' })
    .max(50, { message: 'Response must not exceed 200 characters.' }),
  questions2: z
    .string()
    .min(2, { message: 'Response must be at least 2 characters long.' })
    .max(50, { message: 'Response must not exceed 200 characters.' }),
  questions3: z
    .string()
    .min(2, { message: 'Response must be at least 2 characters long.' })
    .max(50, { message: 'Response must not exceed 200 characters.' }),
});

const getQuestions = async () => {
  const res = await fetch('/api/questions');
  const data = await res.json();

  return data;
};

const postResponses = async (values: z.infer<typeof formSchema>) => {
  // const res = await fetch('/api/questions', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });
};

export const Page = () => {
  const [questions, setQuestions] = useState<Questions[]>([]);

  useEffect(() => {
    getQuestions().then((data) => {
      console.log('data', data.rows);
      setQuestions(data.rows as Questions[]);
    });
  }, []);

  console.log('questions', questions);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      questions1: '',
      questions2: '',
      questions3: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className='flex flex-col items-center min-h-screen p-24'>
      <p>Hello There</p>
      <p></p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <p>Work</p>
          {questions &&
            questions?.map((question, index) => (
              <div key={question.id}>
                <FormField
                  control={form.control}
                  name={
                    `questions${index + 1}` as
                      | 'questions1'
                      | 'questions2'
                      | 'questions3'
                  }
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{question.text}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}

          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
