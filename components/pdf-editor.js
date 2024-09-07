"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Worker } from "@react-pdf-viewer/core"; // Import the Worker component from react-pdf-viewer
import { Viewer } from "@react-pdf-viewer/core"; // Import the Viewer component
import "@react-pdf-viewer/core/lib/styles/index.css"; // Import the styles

export function PdfEditor() {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fileType = ["application/pdf"];

  const handleFileUpload = (e) => {
    const selectedfile = e.target.files?.[0];
    if (selectedfile) {
      if (selectedfile && fileType.includes(selectedfile.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedfile);
        reader.onload = (e) => {
          setPdfFile(e.target?.result);
        };
      } else {
        setPdfFile(null);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };
  const newplugin = defaultLayoutPlugin();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PDF Editor</h1>

      <Input
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
        className="mb-4"
      />
      <Button onClick={handleSubmit}>Upload Pdf</Button>
      {pdfFile && (
        <Tabs defaultValue="view" className="w-full">
          <TabsList>
            <TabsTrigger value="view">View PDF</TabsTrigger>
            <TabsTrigger value="edit">Edit PDF</TabsTrigger>
          </TabsList>
          <TabsContent value="view">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
              {" "}
              {viewPdf && (
                <>
                  {" "}
                  <Viewer fileUrl={viewPdf} plugins={[newplugin]} />
                </>
              )}
              {!viewPdf && <>No PDF</>}
            </Worker>
          </TabsContent>
          <TabsContent value="edit">
            <div className="border p-4 h-[600px]">
              {/* PDF Editor component will go here */}
              <p>PDF Editor Placeholder</p>
            </div>
          </TabsContent>
        </Tabs>
      )}

      {/* <div className="mt-4 flex justify-between">
        <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
          Previous Page
        </Button>
        <span>Page {currentPage}</span>
        <Button onClick={() => setCurrentPage((prev) => prev + 1)}>
          Next Page
        </Button>
      </div> */}

      {/* <Button className="mt-4">Save PDF</Button> */}
    </div>
  );
}
