import React from "react"
import Footer from "../components/footer.js"

export default ({ children }) => (
  <main>
    {children}
    <Footer />
  </main>
)