import { connectDB } from '@/lib/db';
import Product from '@/models/Product';
import User from '@/models/User';
import Coupon from '@/models/Coupon';
import { products } from '@/lib/data';
import { hashPassword } from '@/lib/auth';
import { INITIAL_ADMIN_EMAIL } from '@/lib/constants';

async function seed() {
  await connectDB();
  await Product.deleteMany({});
  await User.deleteMany({});
  await Coupon.deleteMany({});

  await Product.insertMany(products);
  await User.create({
    name: 'Mivyra Admin',
    email: INITIAL_ADMIN_EMAIL,
    password: await hashPassword('admin@123'),
    role: 'admin'
  });

  await User.create({
    name: 'Demo User',
    email: 'user@mivyra.com',
    password: await hashPassword('user@123'),
    role: 'user'
  });

  await Coupon.create({ code: 'MIVYRA10', type: 'percentage', value: 10, minOrderValue: 999, active: true });

  console.log('Seed complete');
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
