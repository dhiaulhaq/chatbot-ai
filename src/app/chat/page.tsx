import { ChatWithSuggestions } from "@/components/chat-container"
import { Card, CardContent } from "@/components/ui/card";

export default function Chat(){
    return (
      <main className="flex flex-col items-center justify-center p-12 max-w-1xl mx-auto">
        <Card className="w-full max-w-2xl">
          <CardContent>
            <ChatWithSuggestions />
          </CardContent>
        </Card>
      </main>
    );
}