import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, Users, TrendingUp, Clock } from "lucide-react"

export function DashboardPreview() {
  return (
    <section id="dashboard" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Powerful Dashboard for Complete Control</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor conversations, track performance, and manage your entire WhatsApp operation from one intuitive
            dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats Overview */}
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Today's Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Messages</span>
                  </div>
                  <span className="font-semibold">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Active Chats</span>
                  </div>
                  <span className="font-semibold">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Conversions</span>
                  </div>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Avg Response</span>
                  </div>
                  <span className="font-semibold">2.3s</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Contact Segments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Hot Leads</Badge>
                  <span className="text-sm font-medium">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Customers</Badge>
                  <span className="text-sm font-medium">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Prospects</Badge>
                  <span className="text-sm font-medium">89</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Preview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Recent Conversations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">John Doe</p>
                      <Badge className="bg-green-100 text-green-800 text-xs">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Hi, I'm interested in your premium package...</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Sarah Miller</p>
                      <Badge variant="outline" className="text-xs">
                        Follow-up
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Thanks for the quick response! When can we schedule a call?
                    </p>
                    <p className="text-xs text-muted-foreground">15 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Mike Johnson</p>
                      <Badge variant="secondary" className="text-xs">
                        Hot Lead
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Perfect! I'll take the annual plan. How do we proceed?
                    </p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
