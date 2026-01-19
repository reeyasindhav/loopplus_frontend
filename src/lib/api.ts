const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

console.log(API_BASE);

export async function ingestPdf(file: File, email: string) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);

    const res = await fetch(`${API_BASE}/ingest/pdf`, {
        method: "POST",
        body: formData,
    });

    if (!res.ok) {
        throw new Error("PDF ingestion failed");
    }

    return res.json();
}

export async function ingestUrl(url: string, email: string) {
    const res = await fetch(`${API_BASE}/ingest/url`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, email }),
    });

    if (!res.ok) {
        throw new Error("URL ingestion failed");
    }

    return res.json();
}


export async function chat(query: string, email: string) {
    const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query, email }),
    });

    if (!res.ok) {
        throw new Error("Chat failed");
    }

    return res.json();
}

export async function login(data: any) {
    const res = await fetch(`${API_BASE}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Login failed");
    }

    return res.json();
}

export async function signup(data: any) {
    const res = await fetch(`${API_BASE}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Signup failed");
    }

    return res.json();
}
