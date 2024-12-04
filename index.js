function openEmail() {
    const recipients = "krrishbkothari@gmail.com,kynandsilva06@gmail.com,vedant.poman@gmail.com";
    const subject = "Inquiry";
    const body = "Hi Balance Buddy,";
    window.location.href = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
