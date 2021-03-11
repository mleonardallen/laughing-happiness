variable "region" {
  description = "AWS has the concept of a Region, which is a physical location around the world where we cluster data centers. We call each group of logical data centers an Availability Zone."
  type        = string
  default     = "us-east-2"
}
