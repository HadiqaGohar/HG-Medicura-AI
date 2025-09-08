// // import { NextRequest, NextResponse } from 'next/server';
// // import fs from 'fs';
// // import path from 'path';

// // export async function GET() {
// //   try {
// //     const dataDir = path.join(process.cwd(), 'data');
// //     const notificationsPath = path.join(dataDir, 'notifications.json');
// //     const newsletterPath = path.join(dataDir, 'newsletter.json');
    
// //     let allSubscribers = [];
    
// //     // Read template notifications
// //     if (fs.existsSync(notificationsPath)) {
// //       try {
// //         const notificationsData = fs.readFileSync(notificationsPath, 'utf8');
// //         const notifications = JSON.parse(notificationsData);
// //         allSubscribers = [...allSubscribers, ...notifications];
// //       } catch (error) {
// //         console.log('Error reading notifications file');
// //       }
// //     }
    
// //     // Read newsletter subscribers
// //     if (fs.existsSync(newsletterPath)) {
// //       try {
// //         const newsletterData = fs.readFileSync(newsletterPath, 'utf8');
// //         const newsletter = JSON.parse(newsletterData);
// //         allSubscribers = [...allSubscribers, ...newsletter];
// //       } catch (error) {
// //         console.log('Error reading newsletter file');
// //       }
// //     }

// //     // Sort by timestamp (newest first)
// //     allSubscribers.sort((a: any, b: any) => {
// //       const timeA = new Date(a.timestamp || a.subscribedAt).getTime();
// //       const timeB = new Date(b.timestamp || b.subscribedAt).getTime();
// //       return timeB - timeA;
// //     });

// //     // Get unique types
// //     const types = [...new Set(allSubscribers.map((n: any) => n.type))];

// //     return NextResponse.json({
// //       notifications: allSubscribers,
// //       count: allSubscribers.length,
// //       types: types,
// //       stats: {
// //         newsletter: allSubscribers.filter((s: any) => s.type === 'newsletter').length,
// //         template_updates: allSubscribers.filter((s: any) => s.type === 'template_updates').length
// //       }
// //     });

// //   } catch (error) {
// //     console.error('Error reading subscribers:', error);
// //     return NextResponse.json(
// //       { error: 'Internal server error' },
// //       { status: 500 }
// //     );
// //   }
// // }
// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// // Define a type for notification and newsletter subscribers
// interface Subscriber {
//   type: string;
//   timestamp?: string;
//   subscribedAt?: string;
//   [key: string]: unknown; // Allow additional fields for flexibility
// }

// export async function GET() {
//   try {
//     const dataDir = path.join(process.cwd(), 'data');
//     const notificationsPath = path.join(dataDir, 'notifications.json');
//     const newsletterPath = path.join(dataDir, 'newsletter.json');
    
//     const allSubscribers: Subscriber[] = [];
    
//     // Read template notifications
//     if (fs.existsSync(notificationsPath)) {
//       try {
//         const notificationsData = fs.readFileSync(notificationsPath, 'utf8');
//         const notifications: Subscriber[] = JSON.parse(notificationsData);
//         allSubscribers.push(...notifications);
//       } catch (_) {
//         console.log('Error reading notifications file');
//       }
//     }
    
//     // Read newsletter subscribers
//     if (fs.existsSync(newsletterPath)) {
//       try {
//         const newsletterData = fs.readFileSync(newsletterPath, 'utf8');
//         const newsletter: Subscriber[] = JSON.parse(newsletterData);
//         allSubscribers.push(...newsletter);
//       } catch (_) {
//         console.log('Error reading newsletter file');
//       }
//     }

//     // Sort by timestamp (newest first)
//     allSubscribers.sort((a: Subscriber, b: Subscriber) => {
//       const timeA = new Date(a.timestamp || a.subscribedAt || 0).getTime();
//       const timeB = new Date(b.timestamp || b.subscribedAt || 0).getTime();
//       return timeB - timeA;
//     });

//     // Get unique types
//     const types = [...new Set(allSubscribers.map((n: Subscriber) => n.type))];

//     return NextResponse.json({
//       notifications: allSubscribers,
//       count: allSubscribers.length,
//       types: types,
//       stats: {
//         newsletter: allSubscribers.filter((s: Subscriber) => s.type === 'newsletter').length,
//         template_updates: allSubscribers.filter((s: Subscriber) => s.type === 'template_updates').length
//       }
//     });

//   } catch (error) {
//     console.error('Error reading subscribers:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define a type for notification and newsletter subscribers
interface Subscriber {
  type: string;
  timestamp?: string;
  subscribedAt?: string;
  [key: string]: unknown; // Allow additional fields for flexibility
}

export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    const notificationsPath = path.join(dataDir, 'notifications.json');
    const newsletterPath = path.join(dataDir, 'newsletter.json');
    
    const allSubscribers: Subscriber[] = [];
    
    // Read template notifications
    if (fs.existsSync(notificationsPath)) {
      try {
        const notificationsData = fs.readFileSync(notificationsPath, 'utf8');
        const notifications: Subscriber[] = JSON.parse(notificationsData);
        allSubscribers.push(...notifications);
      } catch {
        console.log('Error reading notifications file');
      }
    }
    
    // Read newsletter subscribers
    if (fs.existsSync(newsletterPath)) {
      try {
        const newsletterData = fs.readFileSync(newsletterPath, 'utf8');
        const newsletter: Subscriber[] = JSON.parse(newsletterData);
        allSubscribers.push(...newsletter);
      } catch {
        console.log('Error reading newsletter file');
      }
    }

    // Sort by timestamp (newest first)
    allSubscribers.sort((a: Subscriber, b: Subscriber) => {
      const timeA = new Date(a.timestamp || a.subscribedAt || 0).getTime();
      const timeB = new Date(b.timestamp || b.subscribedAt || 0).getTime();
      return timeB - timeA;
    });

    // Get unique types
    const types = [...new Set(allSubscribers.map((n: Subscriber) => n.type))];

    return NextResponse.json({
      notifications: allSubscribers,
      count: allSubscribers.length,
      types: types,
      stats: {
        newsletter: allSubscribers.filter((s: Subscriber) => s.type === 'newsletter').length,
        template_updates: allSubscribers.filter((s: Subscriber) => s.type === 'template_updates').length
      }
    });

  } catch (error) {
    console.error('Error reading subscribers:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}