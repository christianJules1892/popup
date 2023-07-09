const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});


  function showDisclaimerPopup() {
    var popup = document.createElement('div');
    popup.className = 'popup';

    var text = document.createElement('div');
    text.innerHTML = `
      <h2 style="color: orange;" class="privacy">Privacy Policy</h2>
      <h3>Effective Date: [Insert Date]</h3>
      
      <h4>1. Information We Collect</h4>
      <h5>1.1 Personal Information</h5>
      <p>
        We may collect personal information that you voluntarily provide to us when you register as a volunteer on our website or communicate with us through our contact forms or email. This information may include your name, email address, phone number, and any other information you choose to provide.
      </p>
      
      <h5>1.2 Non-Personal Information</h5>
      <p>
        We may automatically collect certain non-personal information when you visit our website, such as your IP address, browser type, referring website, pages visited, and the date and time of your visit. This information is used to analyze trends, administer the website, track user movements, and gather demographic information.
      </p>
      
      <h4>2. Use of Information</h4>
      <h5>2.1 Personal Information</h5>
      <p>
        We may use your personal information to:
        <ul>
          <li>Facilitate your volunteer registration and participation in our programs.</li>
          <li>Communicate with you regarding your volunteer activities, updates, and related matters.</li>
          <li>Respond to your inquiries and provide support.</li>
          <li>Improve and customize our website and services.</li>
          <li>Comply with legal obligations and enforce our policies.</li>
        </ul>
      </p>
      
      <h5>2.2 Non-Personal Information</h5>
      <p>
        Non-personal information may be used for analytical purposes, website administration, and to improve our services and user experience.
      </p>
      
      <h4>3. Disclosure of Information</h4>
      <h5>3.1 Service Providers</h5>
      <p>
        We may disclose your personal information to trusted third-party service providers who assist us in operating our website, managing our programs, or providing related services. These service providers are obligated to protect your personal information and are prohibited from using it for any other purpose.
      </p>
      
      <h5>3.2 Legal Compliance</h5>
      <p>
        We may disclose your information as required by law, regulation, legal process, or governmental request.
      </p>
      
      <h5>3.3 Business Transfers</h5>
      <p>
        In the event of a merger, acquisition, or sale of our organization or assets, your personal information may be transferred to the relevant third party as part of the transaction.
      </p>
      
      <h4>4. Data Security</h4>
      <p>
        We have implemented appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission or storage system can be guaranteed to be 100% secure. Therefore, we cannot guarantee the absolute security of your information.
      </p>
      
      <h4>5. Links to Third-Party Websites</h4>
      <p>
        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party websites you visit.
      </p>
      
      <h4>6. Children's Privacy</h4>
      <p>
        Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you believe we have inadvertently collected personal information from a child under 13, please contact us, and we will promptly delete the information.
      </p>
      
      <h4>7. Changes to this Privacy Policy</h4>
      <p>
        We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on our website. By continuing to use our website, you consent to the updated Privacy Policy.
      </p>
      
      <h4>8. Contact Us</h4>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at [insert contact information].
      </p>
      
      <p>By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.</p>
      
      <p><em>Note: This is a general template for a Privacy Policy and may need to be tailored to meet the specific requirements.</em></p>
    `;

    var button = document.createElement('button');
    button.textContent = 'I Understand';
    button.className = 'popup-button';
    button.addEventListener('click', function () {
      popup.remove();
    });

    popup.appendChild(text);
    popup.appendChild(button);
    document.body.appendChild(popup);
  }

