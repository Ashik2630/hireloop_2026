const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverFetch = async (path) => {
    // Read dynamically to ensure Next.js environment variables are loaded
    const res = await fetch(`${baseUrl}${path}`);
    return res.json();
} 




export const serverMutation = async (path, data) => {
    // Read dynamically to ensure Next.js environment variables are loaded
    const res = await fetch(`${baseUrl}${path}`, {
        method: 'POST',
        headers: {  
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
}