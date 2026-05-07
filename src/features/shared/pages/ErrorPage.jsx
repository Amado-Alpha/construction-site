import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Lock, SearchX, AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  let status;
  let title;
  let description;
  let Icon = AlertTriangle;

  // Detect React Router errors (thrown responses)
  if (isRouteErrorResponse(error)) {
    status = error.status;

    switch (error.status) {
      case 401:
        title = "Unauthorized";
        description = "You need to log in to access this page.";
        Icon = Lock;
        break;

      case 403:
        title = "Forbidden";
        description = "You don’t have permission to view this page.";
        Icon = ShieldAlert;
        break;

      case 404:
        title = "Page Not Found";
        description = "The page you're looking for doesn’t exist.";
        Icon = SearchX;
        break;

      default:
        title = "Something went wrong";
        description = error.statusText || "An unexpected error occurred.";
    }
  } else {
    // Generic JS error (crash)
    status = 500;
    title = "Application Error";
    description = error?.message || "Something went wrong.";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-6">
      <div className="max-w-md w-full text-center space-y-6">

        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-red-100 dark:bg-red-900/30">
            <Icon className="w-10 h-10 text-red-600 dark:text-red-400" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          {status}
        </h1>

        <h2 className="text-2xl font-semibold">
          {title}
        </h2>

        <p className="text-muted-foreground">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>

          <Button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Reload
          </Button>
        </div>
      </div>
    </div>
  );
}