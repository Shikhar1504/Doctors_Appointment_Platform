# Server Actions

This directory contains all the server-side actions for the application, organized by feature. These actions are responsible for handling business logic, database interactions, and API communications.

## Actions

### `admin.js`

Handles all administrative functions, including:

- **`verifyAdmin()`**: Verifies if the current user has an admin role.
- **`getPendingDoctors()`**: Fetches a list of all doctors with a `PENDING` verification status.
- **`getVerifiedDoctors()`**: Fetches a list of all doctors with a `VERIFIED` verification status.
- **`updateDoctorStatus()`**: Updates a doctor's verification status to `VERIFIED` or `REJECTED`.
- **`updateDoctorActiveStatus()`**: Suspends or reinstates a doctor by changing their verification status.
- **`getPendingPayouts()`**: Fetches a list of all pending payout requests that require admin approval.
- **`approvePayout()`**: Approves a payout request, deducts the corresponding credits from the doctor's account, and creates a transaction record.

### `appointments.js`

Manages all appointment-related functionality, including:

- **`bookAppointment()`**: Books a new appointment with a doctor, deducts credits from the patient, and creates a new Vonage Video API session.
- **`createVideoSession()`**: Generates a new Vonage Video API session.
- **`generateVideoToken()`**: Generates a token for a video session, allowing a user to join a call.
- **`getDoctorById()`**: Fetches a doctor's details by their ID.
- **`getAvailableTimeSlots()`**: Fetches a doctor's available time slots for the next four days.

### `credits.js`

Handles all credit-related functionality, including:

- **`checkAndAllocateCredits()`**: Checks a user's subscription plan and allocates the corresponding number of credits.
- **`deductCreditsForAppointment()`**: Deducts credits from a patient's account when they book an appointment and adds them to the doctor's account.

### `doctor.js`

Manages all doctor-specific functionality, including:

- **`setAvailabilitySlots()`**: Sets a doctor's availability slots.
- **`getDoctorAvailability()`**: Fetches a doctor's current availability slots.
- **`getDoctorAppointments()`**: Fetches a doctor's upcoming appointments.
- **`cancelAppointment()`**: Cancels an appointment and refunds the credits to the patient.
- **`addAppointmentNotes()`**: Adds notes to an appointment.
- **`markAppointmentCompleted()`**: Marks an appointment as completed.

### `doctors-listing.js`

Handles the logic for listing doctors, including:

- **`getDoctorsBySpecialty()`**: Fetches a list of all verified doctors with a specific specialty.

### `onboarding.js`

Manages the user onboarding process, including:

- **`setUserRole()`**: Sets a user's role to either `PATIENT` or `DOCTOR` and collects additional information for doctors.
- **`getCurrentUser()`**: Fetches the current user's complete profile information.

### `patient.js`

Handles all patient-specific functionality, including:

- **`getPatientAppointments()`**: Fetches a list of all appointments for the authenticated patient.

### `payout.js`

Manages all payout-related functionality, including:

- **`requestPayout()`**: Allows a doctor to request a payout for their remaining credits.
- **`getDoctorPayouts()`**: Fetches a doctor's payout history.
- **`getDoctorEarnings()`**: Fetches a summary of a doctor's earnings.
