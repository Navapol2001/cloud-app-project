package cloud.app.project.server.model

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "customer_name_view")
data class CustomerNameView (
    @Id
    val cus_id: String,
    val cust_name: String
)
