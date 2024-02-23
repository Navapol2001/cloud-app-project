package cloud.app.project.server.model

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "current_asset")
data class CurrentAsset (
    @Id
    val accounting_id: String,
    val accounting_name: String,
    val details: String,
    val amount: Double
)