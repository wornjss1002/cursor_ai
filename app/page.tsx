import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <button className="bg-red-300 px-4 py-2 rounded-md">버튼</button>
      <br />
      <Button>Button</Button>
      <br />
      <Button variant={"destructive"}>button-destuctive</Button>
      <br />
      <Button variant={"outline"}>button-outline</Button>
      <br />
      <Button variant={"secondary"}>button-secondary</Button>
      <br />
      <Button variant={"ghost"} size={"lg"}>
        button-ghost
      </Button>
    </div>
  );
}
