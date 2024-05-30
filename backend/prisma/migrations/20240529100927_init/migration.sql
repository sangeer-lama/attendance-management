-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT,
    "card_id" TEXT,
    "is_active" INTEGER NOT NULL,
    "disp_order" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_attendance" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "attend_at" TIMESTAMP(3),
    "leave_at" TIMESTAMP(3),

    CONSTRAINT "user_attendance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_attendance" ADD CONSTRAINT "user_attendance_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
