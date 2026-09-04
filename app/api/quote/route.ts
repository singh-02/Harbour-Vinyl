import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "application/pdf",
];

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const decalType = String(formData.get("decalType") || "").trim();

    const length = Number(formData.get("length"));
    const width = Number(formData.get("width"));
    const quantity = Number(formData.get("quantity"));

    const design = formData.get("design");

    if (!name || !email || !decalType) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    if (!length || length <= 0 || length > 24) {
      return NextResponse.json(
        {
          error:
            "Length must be greater than 0 and no more than 24 inches.",
        },
        {
          status: 400,
        }
      );
    }

    if (!width || width <= 0 || width > 12) {
      return NextResponse.json(
        {
          error:
            "Width must be greater than 0 and no more than 12 inches.",
        },
        {
          status: 400,
        }
      );
    }

    if (!quantity || quantity < 1) {
      return NextResponse.json(
        {
          error: "Quantity must be at least 1.",
        },
        {
          status: 400,
        }
      );
    }

    const attachments: {
      filename: string;
      content: Buffer;
      contentType?: string;
    }[] = [];

    if (design instanceof File && design.size > 0) {
      if (design.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          {
            error:
              "The uploaded file must be smaller than 10 MB.",
          },
          {
            status: 400,
          }
        );
      }

      if (!ALLOWED_FILE_TYPES.includes(design.type)) {
        return NextResponse.json(
          {
            error:
              "Please upload a JPG, PNG, PDF or SVG file.",
          },
          {
            status: 400,
          }
        );
      }

      const arrayBuffer = await design.arrayBuffer();

      attachments.push({
        filename: design.name,
        content: Buffer.from(arrayBuffer),
        contentType: design.type,
      });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;
    const quoteEmail = process.env.QUOTE_EMAIL;

    if (!gmailUser || !gmailPassword || !quoteEmail) {
      console.error(
        "Missing required email environment variables."
      );

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    const phoneDisplay = phone || "Not provided";

    await transporter.sendMail({
      from: `"Harbour Vinyl Co." <${gmailUser}>`,

      to: quoteEmail,

      replyTo: email,

      subject: `New Quote Request - ${name}`,

      text: `
NEW HARBOUR VINYL QUOTE REQUEST

Customer
-------------------------
Name: ${name}
Email: ${email}
Phone: ${phoneDisplay}

Order
-------------------------
Type: ${decalType}
Size: ${length}" × ${width}"
Quantity: ${quantity}

Design / Reference
-------------------------
${
  attachments.length > 0
    ? `Attached: ${attachments[0].filename}`
    : "No file uploaded"
}

You can reply directly to this email to contact ${name}.
      `.trim(),

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            color: #18181b;
          "
        >
          <div
            style="
              background: #000;
              padding: 28px;
              border-radius: 16px 16px 0 0;
            "
          >
            <div
              style="
                color: #fff;
                font-size: 22px;
                font-weight: 800;
              "
            >
              HARBOUR
              <span style="color:#dc2626;">
                VINYL CO.
              </span>
            </div>

            <div
              style="
                color: #a1a1aa;
                margin-top: 6px;
              "
            >
              New Quote Request
            </div>
          </div>

          <div
            style="
              border: 1px solid #e4e4e7;
              border-top: none;
              padding: 30px;
              border-radius: 0 0 16px 16px;
            "
          >
            <h2
              style="
                margin-top: 0;
                font-size: 24px;
              "
            >
              Customer Details
            </h2>

            <table
              style="
                width: 100%;
                border-collapse: collapse;
              "
            >
              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #71717a;
                    width: 140px;
                  "
                >
                  Name
                </td>

                <td
                  style="
                    padding: 10px 0;
                    font-weight: 600;
                  "
                >
                  ${name}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #71717a;
                  "
                >
                  Email
                </td>

                <td
                  style="
                    padding: 10px 0;
                    font-weight: 600;
                  "
                >
                  ${email}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #71717a;
                  "
                >
                  Phone
                </td>

                <td
                  style="
                    padding: 10px 0;
                    font-weight: 600;
                  "
                >
                  ${phoneDisplay}
                </td>
              </tr>
            </table>

            <hr
              style="
                border: 0;
                border-top: 1px solid #e4e4e7;
                margin: 25px 0;
              "
            />

            <h2 style="font-size: 24px;">
              Order Details
            </h2>

            <table
              style="
                width: 100%;
                border-collapse: collapse;
              "
            >
              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #71717a;
                    width: 140px;
                  "
                >
                  Decal Type
                </td>

                <td
                  style="
                    padding: 10px 0;
                    font-weight: 600;
                  "
                >
                  ${decalType}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #71717a;
                  "
                >
                  Size
                </td>

                <td
                  style="
                    padding: 10px 0;
                    font-weight: 600;
                  "
                >
                  ${length}&quot; ×
                  ${width}&quot;
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #71717a;
                  "
                >
                  Quantity
                </td>

                <td
                  style="
                    padding: 10px 0;
                    font-weight: 600;
                  "
                >
                  ${quantity}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    color: #71717a;
                  "
                >
                  Design
                </td>

                <td
                  style="
                    padding: 10px 0;
                    font-weight: 600;
                  "
                >
                  ${
                    attachments.length
                      ? attachments[0].filename
                      : "No file uploaded"
                  }
                </td>
              </tr>
            </table>

            <div
              style="
                margin-top: 30px;
                padding: 18px;
                background: #f4f4f5;
                border-radius: 12px;
                color: #52525b;
              "
            >
              Reply directly to this email to respond
              to <strong>${name}</strong>.
            </div>
          </div>
        </div>
      `,

      attachments,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Quote submission error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "We couldn't send your quote request. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}