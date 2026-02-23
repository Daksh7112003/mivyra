import { connectDB } from '@/lib/db';
import Product from '@/models/Product';
import User from '@/models/User';
import Coupon from '@/models/Coupon';
import { products } from '@/lib/data';
import { hashPassword } from '@/lib/auth';

async function seed() {
  await connectDB();
  await Product.deleteMany({});
  await User.deleteMany({});
  await Coupon.deleteMany({});

  await Product.insertMany(products);
  await User.create({
    name: 'Mivyra Admin',
    email: 'admin@mivyra.com',
    password: await hashPassword('admin@123'),
    role: 'admin'
  });
  await Coupon.create({ code: 'MIVYRA10', type: 'percentage', value: 10, minOrderValue: 999, active: true });

  console.log('Seed complete');
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
